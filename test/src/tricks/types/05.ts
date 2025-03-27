const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
    newUsers: "/users/new"
} as const

type Route = (typeof routes)[keyof typeof routes]


const goToRoue = (route: Route) => { }

goToRoue("/admin")