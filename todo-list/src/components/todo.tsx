export const Todo = () => {
    return (<table>
        <thead>
            <tr>
                <th>
                    <td>Date</td>
                </th>
                
                <th>
                    <td>Tile</td>
                </th>
                
                <th>
                    <td>Description</td>
                </th>
                
                <th>
                    <td>Progress</td>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>03-01-2025</td>
                <td>Jogging</td>
                <td>Atleast 1km of jogging</td>
                <td>In Progress</td>
            </tr>
            <tr>
                <td>03-01-2025</td>
                <td>Reading</td>
                <td>Read book atleast 8 pages</td>
                <td>In Progress</td>
            </tr>
            <tr>
                <td>02-28-2025</td>
                <td>Work</td>
                <td>Be productive in this day</td>
                <td>Done</td>
            </tr>
            <tr>
                <td>02-28-2025</td>
                <td>Sleep</td>
                <td>Atleast 8 hours</td>
                <td>Done</td>
            </tr>
        </tbody>
    </table>);
};