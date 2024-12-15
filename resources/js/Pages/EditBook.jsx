import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm, Head } from "@inertiajs/react"

export default function EditBook({ book }){

    //use put http method
    const { data, setData, patch, errors, processing } = useForm({
        'title': book.title,
        'author': book.author,
        'description': book.description,
    })

    //this is send something to route and the route execute function from controller
    const handleUpdate = (e, id) => {
        e.preventDefault()
        console.log(`Edit data with id: ${id}`)
        console.log(data)
        patch(route('books.update', id), {
            onSuccess: () => {
                console.log(`Update data ${id} success`)
            },
            onError: () => {
                console.log(`Update data ${id} error`)
            },
        })
    } 

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Books with Id { book.id }
                </h2>
            }
        >
            <Head title="Edit Book" />
            <div className="flex h-[90vh] items-center justify-center bg-gray-100">
                <div className="w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={(e) => {handleUpdate(e, book.id)}}>
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
                            Edit Book
                        </PrimaryButton>
                    </form>
                    {/* <PrimaryButton 
                    className="mt-4 mx-auto block"
                    onClick={() => handleEdit(book.id)}>
                        Add Book
                    </PrimaryButton> */}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}