
export const dynamic = "force-dynamic";

export default async function About() {
await new Promise((resolve) => setTimeout(resolve , 2000))

  return (
    <div>this is about page</div>
  )
}
