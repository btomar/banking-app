# Backbase Front End Assignment: Make A Transaction

# Description

This application enables you to make a transaction to any destination account with a specific amount. The user is immediately able to view the most recent transactions in a transactions history view.

There are two panels for this single page app:

1. Transaction Form Panel - On the left, this is a form where the "From Account" field is pre-populated and disabled. You can enter text in the "To Account" field and the amount in "Amount" field. On clicking "SUBMIT", you can Preview your input and if all looks good, click Transfer to complete the transaction. The amount submitted is deducted from the balance displayed in the "From Account" field and is immediately visible. The screen will reset to the initial form after completion of a transaction. The submitted transaction is also immediately visible on the right panel under Transactions History.
2. Transactions History Panel - On the right, this panel is listing all the transactions made so far from your account. The most recent transaction submitted, is inserted at the top of this list. The transactions display the date, logo of merchant, merchant name with the type of transaction and finally the amount transferred to the merchant. 

# Assumptions
1. Since there is no server on backend, all data is statically fetched from a transactions.json file.
2. Due to the cross-domain restriction in Google Chrome, the transactions.json file has been wrapped in a callback for JSONP request to work. HTTP GET request are not working in Google Chrome. For this reason, transactions.json had to be customized.
3. Any submitted transactions are for demonstration purpose only and do not actually write to the transactions.json file. If you refresh your screen, you will loose all changes made.
4. Since the logos and colors are fetched from transactions.json for known transactions, any transactions submitted via the form panel will not have color, logo information.