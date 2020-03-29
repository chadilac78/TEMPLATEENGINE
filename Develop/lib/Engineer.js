const Employee = require('../lib/Employee.js')

class Engineer {
    constructor(GitHubUser) {
        Employee.call(this, name, id, email);
        console.log(name, id, email);
        this.GitHubUser = GitHubUser;
    }


}


module.exports = Engineer;