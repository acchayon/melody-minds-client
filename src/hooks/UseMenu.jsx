import { useQuery } from "@tanstack/react-query";

const useMenu = () => {

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://melody-minds-server-acchayon.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
}

export default useMenu;





// const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://melody-minds-server-acchayon.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])