import ClipLoader from "react-spinners/ClipLoader";

const override = {
    // display: "block",
    // margin: "100px auto",
};

interface SpinnerProp {
    loading: boolean,
    size?: number
}

const Spinner = ({ loading, size = 150 }: SpinnerProp) => {
    return (
        <ClipLoader
            color="#4338ca"
            loading={loading}
            cssOverride={override}
            size={size}
        />
    );
};
export default Spinner;
