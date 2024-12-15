<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Cache;

class BookController extends Controller
{
    public function index(){
        //implement redis here
        $cachedBooks = Cache::remember('books.all', 60, function(){
            return Book::all();
        });

        // Log to confirm if cache was hit or not
        if (Cache::has('books.all')) {
            logger('Cache hit for books.all');
        } else {
            logger('Cache miss for books.all');
        }

        return inertia('Dashboard', ['books' => $cachedBooks]);
    }
    public function create(){
        return inertia('AddBook');
    }
    public function store(Request $request){
        $validated = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'description' => 'required|string',
        ]);

        Book::create($validated);

        return redirect()->route('dashboard');
    }
    public function destroy($id){
        $book = Book::findOrFail($id); // Find the book by ID
        $book->delete(); // Delete the book from the database
        return redirect('/dashboard');
    }
    public function edit($id){
        $book = Book::findOrFail($id);
        return inertia('EditBook', ['book' => $book]);
    }
    public function update(Request $request, $id){
        $book = Book::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string',
            'author' => 'sometimes|string',
            'description' => 'sometimes|string',
        ]);
    
        $book->update($validated);

        return redirect()->back();
    }
}
