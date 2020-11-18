export default class User {

    constructor(firstname, lastname, email, avatar) {
        this.name = firstname + " " + lastname;
        this.email = email;
        this.avatar = avatar;
    }
}