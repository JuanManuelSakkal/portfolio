import wppImg from '/src/assets/wpp-icon.png'
const FooterSection = () => {
    return (
        <footer className="py-12 bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                <p className="text-gray-300 mb-6">
                    I'm always interested in hearing about new projects and opportunities.
                </p>
                <p>
                    <a href="mailto:jmsakkal@hotmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    jmsakkal@hotmail.com </a>
                     |
                    <a href="https://api.whatsapp.com/send?phone=541164821702" 
                        target="_blank" 
                        className="text-gray-300 hover:text-green-400 transition-colors grayscale hover:grayscale-0"> Chat with me!
                    <img  src={wppImg} className="ml-1 w-6 inline" /></a>


                </p>
                <span></span>
            </div>
        </footer>
    )
}

export default FooterSection