import promptSync from 'prompt-sync';

//const prompt = promptSync({string: true});
var prompt = promptSync();


class ATM{
    public withdraw: number;
    public balance: number;
    public deposit: number;
    public choice: number;
    
    public constructor(balance: number, withdraw: number, deposit: number, choice: number){
        this.balance = balance;
        this.withdraw = withdraw;
        this.deposit = deposit;
        this.choice = choice;
    }

    
    public CheckBalance(){
        var checkBalance = 5000;
        console.log(`Current balance: ${checkBalance}`);
        return checkBalance;
    }

    public Withdraw() {
        var withdrawAmount = Number(prompt('Enter amount you would like to withdraw: '));
        let newBalance = this.balance - withdrawAmount;
        console.log(`New balance: ${newBalance}`);
        return newBalance;
    }

    public Deposit(){
        var depositAmount = Number(prompt('Enter amount you would like to deposit: '));
        let newBalance = this.balance + depositAmount;
        console.log(`New balance: ${newBalance}`);
        return newBalance;
    }


    public run(){
        while(this.choice !==4){
            console.log('1. Check balance');
            console.log('2. Withdraw');
            console.log('3. Deposit');
            console.log('4. Exit');
            this.choice = Number(prompt('Enter your choice: '));
            switch(this.choice){
                case 1:
                    this.CheckBalance();
                case 2:
                    this.Withdraw();
                case 3:
                    this.Deposit();
                case 4:
                    console.log('Exiting....');
                    break;
                default:
                    console.log('Invalid choice, please try again!!');
                    break;
            }
        }
    }
}


const atm = new ATM(5000, 0, 0, 0);
atm.run();

