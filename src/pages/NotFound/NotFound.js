import image from '../../images/404-error.png'
function NotFound() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover'
            }}
        >
        </div>
    )
}

export default NotFound