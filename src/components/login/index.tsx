import { Button, Card, Form, Input } from "antd";
import { AppDispatch, ILoginFormData } from "./types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginRequest } from "../../lib/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { IStore } from "../../lib/types";
import styles from "./login.module.css";

const Login = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handlerSubmit = (values: ILoginFormData): void => {
    dispatch(userLoginRequest(values));
  };

  const isLoggedIn = useSelector((store: IStore) => {
    return store.auth.isLoggedIn;
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={handlerSubmit}
          className={styles.form}
        >
          <Form.Item name="email" label="Username" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
