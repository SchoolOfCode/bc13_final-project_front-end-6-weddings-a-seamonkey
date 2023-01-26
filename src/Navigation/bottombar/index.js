import * as React from "react";
import { useNavigate } from "react-router";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Search, Cameraswitch, FeaturedPlayList, FoodBank } from "@mui/icons-material";
// import ViewWeekIcon from '@mui/icons-material/ViewWeek';

export default function FixedBottomNavigation() {
	const navigate = useNavigate();
	return (
		<>
			<Paper
				sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation
					sx={{
						gap: "10%",
						minHeight: "10vh",
						backgroundColor: "var(--menu-bar)",
					}}
					showLabels
				>
					<BottomNavigationAction
						sx={{ color: "var(--background-color)" }}
						onClick={() => navigate("/")}
						label="Search"
						icon={<Search sx={{ fontSize: "xxx-large" }} />}
					/>
					{/* <BottomNavigationAction
						sx={{ color: "var(--background-color)" }}
						onClick={() => navigate("/")}
						label="My Foods"
						icon={<FeaturedPlayList sx={{ fontSize: "xxx-large" }} />}
					/> */}
					<BottomNavigationAction
						sx={{ color: "var(--background-color)" }}

						onClick={() => navigate("/MyFoods")}

						label="My Foods"
						icon={<FoodBank sx={{ fontSize: "xxx-large" }} />}
					/>
				</BottomNavigation>
			</Paper>
		</>
	);
}
