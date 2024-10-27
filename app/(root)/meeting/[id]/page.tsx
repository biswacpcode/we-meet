export default async function Meeting({ params }: { params: { id: string } }) {
  const { id } = await params
    return <div>My Post: {id}</div>
  }