
export default function Formulari() {

    // function getTags() {
    //     const rawResponse = await fetch('https://httpbin.org/post', {
    //         method: 'POST',
    //         headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({a: 1, b: 'Textual content'})
    //     });
    //     const content = await rawResponse.json();
    // };

    const tags = ["Hola", "que tal"];
    const itemTags = tags.map((tag) =>

        <div className="col-md-3 mb-3">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" key={"input-" + tag} id={tag} />
                <label key={"label-" + tag} className="custom-control-label" htmlFor={tag}>{tag}</label>
            </div>
        </div>
    );

    return (
        <div>
            <div align="center">
                <h1>Llistat de Tags</h1>
                <form>
                    <div className="row">
                    {itemTags}</div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div>
        </div >
    );
}