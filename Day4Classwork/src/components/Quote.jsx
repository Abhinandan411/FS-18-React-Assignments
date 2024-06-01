export default function Quote({ content, author }) {
    return (
        <div className="text-center border border-gray-500 p-4 rounded-lg w-100 mx-auto m-10 h-40 "  style={{ maxWidth: '90%' }}>
            <div className="rounded-lg flex flex-col justify-center items-center h-full">
                <h1 className="mb-4 font-bold text-xl">{content}</h1>
                <p className="mt-4">{author}</p>
            </div>
        </div>
    );
}