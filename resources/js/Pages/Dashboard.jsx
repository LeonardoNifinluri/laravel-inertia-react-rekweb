import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import {Link} from '@inertiajs/react';


export default function Dashboard({ books }) {
    
    const { delete: destroy } = useForm()
    const handleDelete = (id) => {
        try{
            destroy(route('books.destroy', id))
            console.log(id)
        }catch(e){
            console.log(`Error when delete: ${e}`)
        }
        
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    List Books
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {books.map((book) => (
                        <>
                            <div className="overflow-hidden bg-white shadow-l sm:rounded-lg border-2">
                                <div className="p-6 text-gray-900">
                                    <p className="text-2xl font-bold text-gray-900">{book.title}</p>
                                    <p className='text-m font-bold'>(Authored by {book.author})
                                    <br />
                                    <br />
                                    Description
                                    </p>
                                    {book.description} 
                                    <br />
                                    <br />
                                    <div className="action-button flex gap-8">
                                        <Link href={route('editBook', book.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                            Edit
                                        </Link>
                                        <button
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" 
                                        onClick={() => handleDelete(book.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
