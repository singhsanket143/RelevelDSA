function evaluate(exp) {
    let tokens = exp.split('');
    let values = [], ops = []; // two stacks 
    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i] == ' ') {
            continue;
        }
        // if(tokens[i] == '+') {
        //     console.log(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/' || tokens[i] == '%');
        // }
        // if(tokens[i] == '+' && tokens[i] >= '0' && tokens[i] <= 9) {
        //     console.log("hi");
        // }
        if(tokens[i] >= '0' && tokens[i] <= 9) {
            let temp = "";
            while(i < tokens.length && tokens[i] >= '0' && tokens[i] <= '9') {
                temp += tokens[i];
                i++;
            }
            values.push(parseInt(temp, 10));
            i--;
        } else if (tokens[i] == '(') {
            ops.push(tokens[i]);
        } else if(tokens[i] == ')') {
            while(ops[ops.length - 1] != '(') {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.pop(); // this ops out the opening parenthesis
        } else if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/' || tokens[i] == '%') { 
            while(ops.length > 0 && hasPrecedence(tokens[i], ops[ops.length - 1])) {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.push(tokens[i]);
        }
    }

    while(ops.length  > 0) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }
    return values.pop();
}

// returns true if op2 has higher precedence
function hasPrecedence(op1, op2) {
    if(op2 == '(' || op2 == ')') return false;
    if((op1 == '*' || op1 == '/' ) && (op2 == '+' || op2 == '-')) {
        return false;
    } else {
        return true;
    }
}

function applyOp(op, b, a) {
    if(op == '+') {
        return a + b;
    } else if(op == '-') {
        return a - b;
    } else if(op == '*') {
        return a * b;
    } else if(op == '/') {
        if(b == 0) {
            console.log("division by zero not allowed");
            return;
        } 
        return parseInt(a/b, 10);
    } else if(op == '%') {
        return a % b;
    } 
    return 0;
}

console.log(evaluate("100 * (2 + 12) / 14"))