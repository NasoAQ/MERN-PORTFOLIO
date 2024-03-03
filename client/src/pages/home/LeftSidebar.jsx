import React from "react";

const LeftSidebar = () => {
	return (
		<div className="fixed left-0 bottom-0 px-10 sm:static">
			<div className="flex flex-col items-center">
				<div className="flex flex-col opacity-70 gap-3 sm:flex-row">
					<a
						href="https://www.linkedin.com/in/gabriele-d-onofrio-46494563/"
						target="blank"
					>
						<i class="ri-linkedin-fill text-tertiary "></i>
					</a>
					<a href="https://github.com/NasoAQ" target="blank">
						<i class="ri-github-fill text-tertiary "></i>
					</a>
					<i class="ri-mail-fill text-tertiary "></i>
				</div>
				<div className="w-[1px] h-32 bg-secondary opacity-30 sm:hidden"></div>
			</div>
		</div>
	);
};

export default LeftSidebar;
