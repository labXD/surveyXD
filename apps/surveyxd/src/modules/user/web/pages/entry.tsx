import { trpc } from "@/trpc/web"

export default function IndexPage() {
  const hello = trpc.useQuery(["user.hello", { text: "client" }])

  if (hello.isLoading) {
    return <div>Loading...</div>
  }

  if (hello.isError) {
    return <div>Error: {hello.error.message}</div>
  }

  if (!hello.data) {
    return <div>Error: No data</div>
  }

  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  )
}
