// Importation of functions in component
import Header from "./Component/Header";
import {Button1, Button2, Button3 } from "./Component/Button";
import {Image} from "./Component/Image";

function App() {
    return (
    <div>
     <Header />;
     <Button1 />;
     <Button2 />;
     <Button3 />;
     <Image />
     </div>
    );
}
export default App;
