import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm, Head } from "@inertiajs/react"
export default function AddBook(){
    const { data, setData, post, errors, processing } = useForm({
        'title': '',
        'author': '',
        'description': '',
    })
    const handleCreate = (e) => {
        console.log(data)
        e.preventDefault(); // Prevent default form submission behavior
        post(route("books.store")); // Send data to the specified route
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Add New Book
                </h2>
            }
        >
            <Head title="Add Book" />
            <div className="flex h-[90vh] items-center justify-center bg-gray-100">
                <div className="w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleCreate}>
                        <InputLabel htmlFor="title" value="Title" />
                        <TextInput
                            id="title"
                            name="title"
                            placeholder="Input book's title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="mt-1 block w-full"
                            isFocused={true}
                            required
                        />
                        <br />
                        <InputLabel htmlFor="author" value="Author" />
                        <TextInput
                            id="author"
                            name="author"
                            placeholder="Input book's author"
                            value={data.author}
                            onChange={(e) => setData('author', e.target.value)}
                            className="mt-1 block w-full"
                            isFocused={true}
                            required
                        />
                        <br />
                        <InputLabel htmlFor="Description" value="Description" />
                        <TextInput
                            id="Description"
                            name="Description"
                            placeholder="Input book's description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full"
                            isFocused={true}
                            required
                        />
                        <br />
                        <PrimaryButton 
                        className="mt-4 mx-auto block">
                            Add Book
                        </PrimaryButton>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}