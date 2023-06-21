function Withdraw(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [withdrawAmt, setWithdrawAmt] = React.useState();
  const ctx                           = React.useContext(UserContext);
  let user                            = ctx.users.length-1;
  let balance                         = ctx.users[user].balance;
  
  function validate(bal, wdraw){
      if (wdraw > bal) {
        setStatus('Error: Your withdrawal amount is higher than your availble funds, please try again');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (isNaN (wdraw)) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (wdraw.length == 0) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }
  
  function handleSubmit(){
    if (!validate(balance, withdrawAmt)) return;
    let newBalance = parseInt(balance) - parseInt(withdrawAmt);
    balance = newBalance;
    ctx.users[user].balance = newBalance;
    setShow(false);
  }    

  function clearForm(){
    setWithdrawAmt();
    setShow(true);
  }
  return (
    <Card
      bgcolor="secondary"
      header="Withdraw"
      title="Enter Withdrawal amount below"
      status={status}
      body={show ? (  
              <>
              Balance: ${balance}<br/>
              Withdraw<br/>
              <input type="input" className="form-control" id="withdrawAmt" placeholder="Enter Withdrawal Amount" value={withdrawAmt} onChange={e => setWithdrawAmt(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit Withdrawal</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
              </>
            )}
    />
  );
}

