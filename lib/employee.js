class Employee {
    constructor (name, id, email, github) {
    this.role = role;
    this.name= name;
    this.id = id;
    this.email= email;

}
    getRole() {
        return this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}
module.exports = Employee;
    