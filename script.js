function check(){
    let word = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    let processedWord = word.replace(/[\s_@.,-/()]+/g, '').toLowerCase();

    let wordreverse = processedWord.split('').reverse().join('');
    if(word == ""){
        alert("Please input a value");
    }else if(word.length == 1){
    result.innerHTML = `<strong>${word}</strong> is a Palindrome`;
    }else if(processedWord == wordreverse){
        result.innerHTML = `<strong>${word}</strong> is a Palindrome`;
    }else{
        result.innerHTML = `<strong>${word}</strong> is not a Palindrome`;
    }

}