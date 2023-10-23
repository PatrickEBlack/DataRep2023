function Content() {
    return (
        <div>
            {/Hello World :)/}
            <h1>Hello World!</h1>

            {/Displays the current local time to the screen/}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Content;