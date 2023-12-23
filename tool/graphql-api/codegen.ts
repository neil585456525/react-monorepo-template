import type { CodegenConfig } from '@graphql-codegen/cli';
import { apiEndpoint } from 'config';

const shareConfig = {
  config: {
    avoidOptionals: {
      field: true,
      inputValue: false,
      defaultValue: true,
    },
    maybeValue: 'T',
    defaultScalarType: 'string',
  },
  plugins: {
    api: [
      'typescript',
      'typescript-operations',
      {
        'typescript-document-nodes': {
          documentMode: 'documentNode',
        },
      },
      {
        'typescript-react-query': {
          exposeQueryKeys: true,
          exposeFetcher: true,
          addInfiniteQuery: true,
          legacyMode: false,
          errorType: 'FetchErrorType',
        },
      },
    ],
  },
};

const getMockPluginConfig = (config: { mswLink: { endpoint: string } }) => {
  return [
    'typescript',
    'typescript-operations',
    {
      'typescript-msw': {
        link: { ...config.mswLink, name: 'apiLink', withSuffix: false },
      },
    },
    {
      'typescript-mock-data': {
        terminateCircularRelationships: true,
        prefix: 'a',
      },
    },
  ];
};

type ApiType = 'api1' | 'api2';

interface AppApiConfig {
  name: string;
  dist: string;
  apis: ApiType[];
}

const appApiConfigs: AppApiConfig[] = [
  {
    name: 'admin',
    dist: 'app/admin/src/gql',
    apis: ['api1', 'api2'],
  },
  {
    name: 'website',
    dist: 'app/website/src/gql',
    apis: ['api1'],
  },
];

const getCodegenConfigGenerates = () => {
  const generates: CodegenConfig['generates'] = {};

  /**
   * Project Codegen Section
   */
  const addProjectCodegenConfig = (payload: {
    projectDist: string;
    apiTypeName: ApiType;
  }) => {
    const { projectDist, apiTypeName } = payload;

    const schema = `schema.${apiTypeName}.gql`;
    const documents = `../../${projectDist}/documents/${apiTypeName}/*.gql`;
    const generatedFileNamePrefix = `../../${projectDist}/__generated__/${apiTypeName}`;

    generates[`${generatedFileNamePrefix}Api.ts`] = {
      schema,
      documents,
      config: {
        fetcher: { endpoint: apiEndpoint[apiTypeName] + '/graphql' },
        ...shareConfig.config,
      },
      plugins: shareConfig.plugins.api,
    };

    generates[`${generatedFileNamePrefix}Mock.ts`] = {
      schema,
      documents,
      config: shareConfig.config,
      plugins: getMockPluginConfig({
        mswLink: {
          endpoint: apiEndpoint[apiTypeName] + '/graphql',
        },
      }),
    };
  };

  appApiConfigs.forEach((projectItem) => {
    if (projectItem.apis.includes('api1')) {
      addProjectCodegenConfig({
        projectDist: projectItem.dist,
        apiTypeName: 'api1',
      });
    }

    if (projectItem.apis.includes('api2')) {
      addProjectCodegenConfig({
        projectDist: projectItem.dist,
        apiTypeName: 'api2',
      });
    }
  });

  return generates;
};

const config: CodegenConfig = {
  generates: getCodegenConfigGenerates(),
};

export default config;
