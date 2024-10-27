type tParams = {id:string}
export default function Component(props : {params: tParams}){
  const {id } = props.params;
  console.log(id);
  return <p>{id}</p>
}