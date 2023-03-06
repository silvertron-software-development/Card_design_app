import { Link } from 'react-router-dom'
import { TemplateCard } from '../components/TemplateCard'
// import styled from 'styled-components';
import logo from '../assets/images/logo_printing.png'
import 'bulma/css/bulma.css'

export const TemplateSelect = () => {
	let templates = [
		{
			id: 1,
			title: 'Tarjetas de presentación'
		},
		{
			id: 2,
			title: 'Hojas membretadas'
		}
		//   }, {
		//     "id": 3,
		//     "title": "Template c"
		//   }
	]

	return (
		<>
			<section className="hero is-medium is-bold">
				<div className="hero-head">
					<nav className="navbar">
						<div className="container">
							<div className="navbar-brand">
								<a className="navbar-item" href="../">
									<img src={logo} alt="logo" />
								</a>
								<span className="navbar-burger burger" data-target="navbarMenu">
									<span></span>
									<span></span>
									<span></span>
								</span>
							</div>
							<div id="navbarMenu" className="navbar-menu">
								<div className="navbar-end">
									<div className="is-right">
										<span className="navbar-item">
											<Link to="editor">
												<span className="button is-outlined">
													{/* <span class="icon">
                                                <i class="fa fa-github"></i>
                                            </span> */}
													<span title="Hello from the other side">
														Ir al editor
													</span>
												</span>
											</Link>
										</span>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className="hero-body has-text-centered">
					<div className="container has-text-centered">
						<h1 className="title">
							Tu propia tarjeta de presentación diseñada a tu gusto
						</h1>
						<h3 className="subtitle">
							Dale el toque propio que buscabas a la presentación de tu negocio
						</h3>
					</div>
				</div>
			</section>
			<div className="box cta" style={{ backgroundColor: '#F49441' }}>
				<p className="has-text-centered">
					<span className="tag is-primary">Nuevo</span> O elige alguna de
					nuestras plantillas
				</p>
			</div>

			<section className="container">
				{/* <div className="columns features">
            { templates.map( (template) =>
                
                <div className="column is-4" key={template.id}>
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            {/* <i class="fa fa-apple"></i> */}
				{/*</div>
                        <div className="card-content">
                            <div className="content">
                                <h4> Leo integer malesuada nunc vel risus. </h4>
                                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <TemplateCard key={template.id} title={template.title}/>
                            </div>
                        </div>
                    </div>
                </div> 
                      
        )} 
        </div> */}
				<div className="intro column is-8 is-offset-2">
					<h2 className="title">
						¡Prueba nuestro editor o alguna de nuestras plantillas!
					</h2>
					<br />
					<p className="subtitle">
						¡La herramienta perfecta para una tarjeta de presentación
						profesional sin ser diseñador!
					</p>
				</div>
				<div className="columns features">
					{templates.map((template) => (
						<div className="column is-6" key={template.id}>
							<div className="card is-shady">
								<div className="card-image has-text-centered">
									<figure className="image">
										<img
											src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
											alt="Placeholder"
										/>
									</figure>
								</div>
								<div className="card-content">
									<div className="content">
										{/* <h4> Leo integer malesuada nunc vel risus. </h4> */}
										{/* <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p> */}
										<TemplateCard key={template.id} title={template.title} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<footer className="footer has-text-centered">
					<div className="content has-text-centered">
						<p>
							<strong>LITOGRAFIA GIL S.A. DE C.V</strong>. The source code is
							licensed
							<a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
							The website content is licensed{' '}
							<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
								CC BY NC SA 4.0
							</a>
							.
						</p>
					</div>
				</footer>
			</section>
		</>
	)
}

export default TemplateSelect

// const ListParagraph = styled.p`
//     border-radius: 5px;
//     box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
//     padding: 30px;
//     margin: 0 auto 20px auto;
//     border-top: 3px solid hsl(229, 6%, 66%);
//     display: flex;
//     flex-flow: row wrap;
//     align-items: flex-end;
//     width: 75%;
// `
