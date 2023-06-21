function AllData(){
  const ctx = React.useContext(UserContext);
  
  function buildCard() {
    for (let i = 0; i < ctx.users.length; i++) {
      console.log(ctx.users[i].name);
    }
  }
  
  return (
    <>
      <h1>all the data</h1>
      <table id="id01">
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Balance</th>
  </tr>
  <tr w3-repeat="Users">
    <td>{{UserName}}</td>
    <td>{{UserEmail}}</td>
    <td>{{UserPassword}}</td>
    <td>{{UserBalance}}</td>
  </tr>
</table>
      {JSON.stringify(ctx)}<br/>
    </>
  ); 
}
