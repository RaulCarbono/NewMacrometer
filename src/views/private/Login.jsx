import avatar from '../../img/avatar.png';

export const Login = () => {
  return (
    <>
      <main className="container_card_login">
        <section className="desing_img">
          <div className="icon_desing"></div>
        </section>
        <section className="form_login">
          <div className="icon">
            <img
              src={avatar}
              alt="User"
            />
          </div>
          <label>
            Ingresa tu usuario
            <input
              className="user"
              type="text"
            />
          </label>
          <label>
            Ingresa tu contraseña
            <input
              className="password"
              type="text"
            />
          </label>
        </section>
      </main>
    </>
  );
};
