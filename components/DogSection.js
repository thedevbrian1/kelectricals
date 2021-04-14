import Dog from "./Dog";

export default function DogSection() {
    return (
        <div className="md:flex py-16 px-10 bg-indigo-800 text-indigo-200 text-center">
            <Dog image="https://images.unsplash.com/photo-1568572933382-74d440642117?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" text="Husky" />

            <Dog image="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" text="Labrador" />

            <Dog image="https://images.unsplash.com/photo-1561754050-9a1ee0470c73?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" text="Bulldog" />

            <Dog image="https://images.unsplash.com/photo-1549437773-afec1d17b025?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" text="German Shepherd" />
        </div>
    )
}