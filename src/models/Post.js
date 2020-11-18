export default class Post {

    constructor(firstname, lastname, avatar, date, text, media, likes) {
        this.name = firstname + " " + lastname;
        this.avatar = avatar;
        this.createDate = date;
        this.text = text;
        this.media = media;
        this.likes = likes;
    }
}