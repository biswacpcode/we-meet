export default function Meeting({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>;
}
