function Deposit(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [depositAmt, setDepositAmt]   = React.useState();
  const ctx                           = React.useContext(UserContext);
  let user                            = ctx.users.length-1;
  let balance                         = ctx.users[user].balance;
  
  function validate(bal, depositN){
      if (isNaN (depositN)) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (depositN <= 0) {
        setStatus ('Error: Please enter a number')
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (depositN.length == 0) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }
  
  function handleSubmit(){
    if (!validate(balance, depositAmt)) return;
    let newBalance = parseInt(balance) + parseInt(depositAmt);
    balance = newBalance;
    ctx.users[user].balance = newBalance;
    setShow(false);
  }    

  function clearForm(){
    setDepositAmt();
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Deposit"
      title="Enter deposit amount below"
      status={status}
      body={show ? (  
              <>
              Balance: ${balance}<br/>
              Deposit<br/>
              <input type="input" className="form-control" id="depositAmt" placeholder="Enter Deposit Amount" value={depositAmt} onChange={e => setDepositAmt(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    />
  );
}
