export default function Meeting({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>My Post: {id}</div>;
}
