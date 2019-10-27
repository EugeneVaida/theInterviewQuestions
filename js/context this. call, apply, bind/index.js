function hello(){
    console.log('Hello', this);
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this), // this === window >> true
    logInfo: function(job, phone){
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena, 'frontend', '8-999-123-45-45')();
person.logInfo.call(lena, 'frontend', '8-999-123-45-45');
person.logInfo.apply(lena, ['frontend', '8-999-123-45-45'])