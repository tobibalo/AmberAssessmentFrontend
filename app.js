const app = Vue.createApp({
    data() {
        return {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cell: '',
            gender: '',
            picture: '',
            streetNumber: '',
            streetName: '',
            city: '',
            state: '',
            country: '',
            postcode: '',
            offset: '',
            description: '',
            dobDate: '',
            dobAge: '',
            registeredDate: '',
            registeredAge: '',
            elementVisible: true
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.phone = results[0].phone
            this.cell = results[0].cell
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.streetNumber = results[0].location.street.number
            this.streetName = results[0].location.street.name
            this.city = results[0].location.city
            this.state = results[0].location.state
            this.country = results[0].location.country
            this.postcode = results[0].location.postcode
            this.offset = results[0].location.timezone.offset
            this.description = results[0].location.timezone.description
            this.dobDate = results[0].dob.date
            this.dobAge = results[0].dob.age
            this.registeredDate = moment(results[0].registered.date).format("DD-MMM-YYYY")
            this.registeredAge = results[0].registered.age
        },
    },
    created() {
        setTimeout(() => this.elementVisible = false, 1000)
        this.getUser()
    },
})

app.mount('#app')
