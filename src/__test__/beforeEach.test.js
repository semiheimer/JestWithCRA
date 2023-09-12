class DatabaseClient {
    constructor() {
        this.users = [];
    }

    initialize() {
        this.users = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Smilga'},
            {id: 3, name: 'Semih'},
            {id: 4, name: 'Sean'},
        ];
    }

    getUsers() {
        return this.users;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }

    reset() {
        this.users = [];
    }
}

// afterEach beforeEach
describe('Database Client', () => {
    let dbClient;
    beforeEach(() => {
        dbClient = new DatabaseClient();
        dbClient.initialize();
    });

    it('should initialize with two users', () => {
        const users = dbClient.getUsers();
        expect(users.length).toBe(4);
        expect(users).toMatchObject([
            {id: 1, name: 'John'},
            {id: 2, name: 'Smilga'},
            {id: 3, name: 'Semih'},
            {id: 4, name: 'Sean'},
        ]);
    });

    it('should deleted user with id', () => {
        dbClient.deleteUser(2);

        const users = dbClient.getUsers();
        const user = dbClient.getUser(2);

        expect(user).toBeFalsy();
        expect(users.length).toBe(3);
        expect(users).toMatchObject([
            {id: 1, name: 'John'},
            {id: 3, name: 'Semih'},
            {id: 4, name: 'Sean'},
        ]);
    });

    it('should get user with id', () => {
        const user = dbClient.getUser(2);

        expect(user).toBeTruthy();
        expect(user.id).toBe(2);
        expect(user.name).toBe('Smilga');
        expect(user).toMatchObject({id: 2, name: 'Smilga'});
    });
});
