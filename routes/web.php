<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//route for create book form
Route::get('/addBook', [BookController::class, 'create'])->name('addBook');

//route for add book
Route::post('/books', [BookController::class, 'store'])->name('books.store');

//route for delete
Route::delete('/books/{id}', [BookController::class, 'destroy'])->name('books.destroy');

//route for edit form
Route::get('/books/edit/{id}', [BookController::class, 'edit'])->name('editBook');

//route for update
Route::patch('/books/update/{id}', [BookController::class, 'update'])->name('books.update');

//route for dashboard
Route::get('/dashboard', [BookController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

//test redis
Route::get('/test-redis', function () {
    Redis::set('name', 'Laravel');
    return Redis::get('name');
});

//test caching
Route::get('/test-cache', function () {
    Cache::put('test', 'Hello, Redis!', 10); // Store for 10 minutes
    return Cache::get('test'); // Retrieve it
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
