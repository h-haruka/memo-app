function Item (props: {value: any, index: number}) {
  const th = {
    textAlign: "left" as const,
    width: "70px"
  }
  const td = {
    textAlign: "right" as const,
    width: "150px"
  }
  let d = new Date(Date.parse(props.value.created));
  let f = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();

  return (
    <tr>
      <th style={th}>No, {props.index}</th>
      <td>{props.value.message}</td>
      <td style={td}>{f}</td>
    </tr>
  );
}

export default Item;