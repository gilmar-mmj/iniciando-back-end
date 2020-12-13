import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUsers = new AuthenticateUserService();

  const { user, token } = await authenticateUsers.execute({
    email,
    password,
  });

  const userWithouPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return response.json({ userWithouPassword, token });
});

export default sessionsRouter;
