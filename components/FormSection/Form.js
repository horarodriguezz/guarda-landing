import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import styles from "styles/FormSection/Form.module.css";
import Image from "next/image";

const Form = ({ setStatus }) => {
  const schema = object().shape({
    name: string().required("Este campo es requerido."),
    phone: string().required("Este campo es requerido"),
    email: string()
      .required("Este campo es requerido")
      .email("Por favor ingrese un email válido."),
    company: string().required("Este campo es requerido"),
    message: string()
      .required("Este campo es requerido")
      .max(200, "La cantidad maxima de caracteres es de 200 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status >= 200 && response.status < 300) {
        setStatus({
          title: "Mensaje enviado",
          message: "El envío del formulario se realizo correctamente.",
        });
      }

      reset();
    } catch (error) {
      setStatus({
        title: "Ha ocurrido un error",
        message:
          "Ha ocurrido un error mientras se enviaba el formulario, por favor intenta nuevamente.",
      });
      console.log(error);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        type='text'
        {...register("name")}
        className={styles.form__input}
        placeholder='Nombre y apellido'
      />
      {errors.name && (
        <p className={styles.form__errormessage}>{errors.name.message}</p>
      )}
      <input
        type='tel'
        {...register("phone")}
        className={styles.form__input}
        placeholder='Teléfono'
      />
      {errors.phone && (
        <p className={styles.form__errormessage}>{errors.phone.message}</p>
      )}
      <input
        type='email'
        {...register("email")}
        className={styles.form__input}
        placeholder='Email'
      />
      {errors.email && (
        <p className={styles.form__errormessage}>{errors.email.message}</p>
      )}
      <input
        type='text'
        {...register("company")}
        className={styles.form__input}
        placeholder='Empresa'
      />
      {errors.company && (
        <p className={styles.form__errormessage}>{errors.company.message}</p>
      )}
      <textarea
        {...register("message")}
        className={styles["form__input--textarea"]}
        placeholder='Mensaje'
      ></textarea>
      {errors.message && (
        <p className={styles.form__errormessage}>{errors.message.message}</p>
      )}
      <button className={styles.form__submitbtn}>
        <span>Enviar</span>
        <div className={styles.form__submitbtn_icon}>
          <Image
            src='/assets/icons/icon material-send.svg'
            alt=''
            layout='fill'
            sizes='5vw'
            objectFit='contain'
            objectPosition='center'
          />
        </div>
      </button>
    </form>
  );
};

export default Form;
