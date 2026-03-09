import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type User = { email: string; name: string };

type AuthContextValue = {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => { ok: boolean; message?: string };
  register: (name: string, email: string, password: string) => { ok: boolean; message?: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const STORAGE_KEY = 'ova-cart-user';
const USERS_KEY = 'ova-cart-users';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : null;
  });

  const getUsers = () => {
    const value = localStorage.getItem(USERS_KEY);
    return value ? (JSON.parse(value) as Array<User & { password: string }>) : [];
  };

  const setUsers = (users: Array<User & { password: string }>) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const login = (email: string, password: string) => {
    if (!email || !password) {
      return { ok: false, message: 'Email and password are required.' };
    }

    const users = getUsers();
    const existing = users.find((item) => item.email.toLowerCase() === email.toLowerCase());
    if (!existing || existing.password !== password) {
      return { ok: false, message: 'Invalid credentials. Please register first.' };
    }

    const nextUser = { email: existing.email, name: existing.name };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    return { ok: true };
  };

  const register = (name: string, email: string, password: string) => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return { ok: false, message: 'Name, email and password are required.' };
    }
    if (password.length < 6) {
      return { ok: false, message: 'Password must be at least 6 characters.' };
    }

    const users = getUsers();
    const duplicate = users.some((item) => item.email.toLowerCase() === email.toLowerCase());
    if (duplicate) {
      return { ok: false, message: 'Email already exists. Please login.' };
    }

    const nextUsers = [...users, { name: name.trim(), email: email.trim(), password }];
    setUsers(nextUsers);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, isLoggedIn: Boolean(user), login, register, logout }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
