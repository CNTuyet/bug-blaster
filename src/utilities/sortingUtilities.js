const sortingUtilities = (tickets, preference) => {
    switch (preference) {
        case 'High to Low':
            // b.priority.localeCompare(a.priority): trả về âm nếu b.priority > a.priority => sắp xếp giảm dần
            return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
        case 'Low to High':
            return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
        default:
            return tickets;
    }
}

export default sortingUtilities