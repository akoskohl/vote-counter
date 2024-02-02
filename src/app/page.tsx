import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl">🗳️ Vote Counter</h1>
      <div id="firebaseui-auth-container"></div>
    </main>
  );
}