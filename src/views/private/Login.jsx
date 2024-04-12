import avatar from '../../img/avatar.png';
import Lottie from 'lottie-react';
import Welcome from '../../assest/welcome.json'

export const Login = () => {
  return (
    <>
      <main className="container_card_login">
        <section className="desing_img">
          <div className="icon_desing">  <Lottie animationData={Welcome} /></div>
        </section>
        <section className="form_login">
          <div className="icon">
            <img
              src={avatar}
              alt="User"
            />
          </div>
          <label>
            Usuario
            <input
              className="user"
              type="text"
            />
          </label>
          <label>
            Contraseña
            <input
              className="password"
              type="text"
            />
          </label>

          <button className='btn-ingresar'>Ingresar</button>
        </section>
      </main>
    </>
  );
};
