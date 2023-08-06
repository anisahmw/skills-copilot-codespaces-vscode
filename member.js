function skillsMember() {
    const member = {
        name: 'John Doe',
        age: 30,
        address: {
            city: 'Miami',
            country: 'USA'
        }
    }

    let { name, age, address: { city, country } } = member;
    console.log(name, age, city, country);
}