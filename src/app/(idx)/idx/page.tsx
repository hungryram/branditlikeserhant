import IdxScript from "../components/idx-script"

export default function IdxPage() {
    return (
        <div className="section">
            <div className="container">
            {/* <script id="idxWrapper" dangerouslySetInnerHTML={{
                        __html: `document.currentScript.replaceWith(ihfKestrel.render());`
                    }}/> */}
                <IdxScript/>
            </div>
        </div>
    )
}