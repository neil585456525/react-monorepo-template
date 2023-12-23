import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { api1Api } from '@/gql';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </>
  );
}

function Content() {
  const { data } = api1Api.useGetUserQuery({ id: '1' });
  return (
    <>
      <p>User Info</p>
      <p>id: {data?.user.id}</p>
      <p>name: {data?.user.name}</p>
      <p>email: {data?.user.email}</p>
    </>
  );
}

export default App;
