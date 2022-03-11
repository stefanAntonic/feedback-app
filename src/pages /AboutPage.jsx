import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is React App to leave feedback for a product 
            or service</p>
            <p>Version: 1.0.0</p>
            <Link to="/">Back to home page </Link>
        </div>
    </Card>
  )
}

export default AboutPage